import { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/hooks/useLanguage";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatbotWidget = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const renderMessageWithLinks = (text: string) => {
    // Handle different link formats
    const parts = [];
    let lastIndex = 0;
    
    // First handle Markdown-style links [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = markdownLinkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Add the link
      parts.push({
        type: 'link',
        text: match[1],
        url: match[2].trim(),
        key: `markdown-${match.index}`
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    // Now process each part for direct URLs
    const finalParts = [];
    parts.forEach((part, partIndex) => {
      if (typeof part === 'object' && part.type === 'link') {
        finalParts.push(part);
        return;
      }
      
      if (typeof part !== 'string') return;
      
      // Handle direct URLs in text parts
      const urlRegex = /(https?:\/\/[^\s<>'"]+)/g;
      const urlParts = part.split(urlRegex);
      
      urlParts.forEach((urlPart, urlIndex) => {
        if (urlRegex.test(urlPart)) {
          finalParts.push({
            type: 'link',
            text: urlPart,
            url: urlPart,
            key: `url-${partIndex}-${urlIndex}`
          });
        } else if (urlPart) {
          finalParts.push(urlPart);
        }
      });
    });
    
    return finalParts.map((part, index) => {
      if (typeof part === 'object' && part.type === 'link') {
        // Ensure URL has proper protocol
        let url = part.url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'https://' + url;
        }
        
        return (
          <a
            key={part.key || `link-${index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80 font-medium cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              // Force open in new tab
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
          >
            {part.text}
          </a>
        );
      }
      return part;
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open the chatbot and show welcome message + support preset messages
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Add welcome message
      const welcomeMessage: Message = {
        id: "welcome-" + Date.now(),
        text: t('chatbot.welcome') as string,
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }, 1000);

    // Listen for external requests to open with a prefilled message
    const handleOpenWithMessage = (e: Event) => {
      const detail = (e as CustomEvent<{ message: string }>).detail;
      if (detail?.message) {
        setIsOpen(true);
        setInputValue(detail.message);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    window.addEventListener("open-chatbot-with-message", handleOpenWithMessage as EventListener);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-chatbot-with-message", handleOpenWithMessage as EventListener);
    };
  }, [t]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: "user-" + Date.now(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("https://n8n.heyhay.ai/webhook/b71eb517-1502-4118-87cb-dbebd71ab7c6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          language: language,
          timestamp: new Date().toISOString()
        })
      });

      const data = await response.json();
      
      // Extract the content from the webhook response format
      const botResponse = Array.isArray(data) && data.length > 0 && data[0].content 
        ? data[0].content 
        : "Thank you for your message! I'll help you schedule your appointment.";
      
      const botMessage: Message = {
        id: "bot-" + Date.now(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: "error-" + Date.now(),
        text: t('chatbot.error') as string,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 md:w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-[1000] flex flex-col md:bottom-24 md:right-6 animate-enter">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">DS</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Dr. Smith Dental</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-primary-foreground hover:bg-white/20 px-2 py-1 h-auto text-xs flex items-center gap-1"
                title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <span>{language === 'en' ? 'Cambiar idioma' : 'Switch language'}</span>
                <span className="text-sm">{language === 'en' ? '🇪🇸' : '🇺🇸'}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-primary-foreground hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[90%] p-4 rounded-lg text-base leading-relaxed ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{renderMessageWithLinks(message.text)}</div>
                    <div className={`text-xs mt-1 opacity-70 ${
                      message.isBot ? "text-muted-foreground" : "text-primary-foreground/70"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('chatbot.placeholder') as string}
                disabled={isLoading}
                className="flex-1"
              />
              <Button 
                type="submit" 
                size="sm" 
                disabled={isLoading || !inputValue.trim()}
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <Button
        onClick={toggleChat}
        data-testid="chat-fab"
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[1001] ${
          isOpen 
            ? "bg-destructive hover:bg-destructive/90" 
            : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </>
  );
};
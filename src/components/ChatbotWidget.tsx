import { useEffect } from "react";

export const ChatbotWidget = () => {
  useEffect(() => {
    // Create and append the chatbot iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://studio--chattybot-j2381.us-central1.hosted.app';
    iframe.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 400px;
      height: 600px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      display: none;
      background: white;
    `;
    
    // Responsive design for mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIframeSize = () => {
      if (mediaQuery.matches) {
        iframe.style.width = 'calc(100vw - 20px)';
        iframe.style.height = 'calc(100vh - 40px)';
        iframe.style.right = '10px';
        iframe.style.bottom = '10px';
        iframe.style.left = '10px';
      } else {
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.right = '20px';
        iframe.style.bottom = '20px';
        iframe.style.left = 'auto';
      }
    };
    
    updateIframeSize();
    mediaQuery.addListener(updateIframeSize);
    
    document.body.appendChild(iframe);
    
    // Create floating action button
    const fab = document.createElement('button');
    fab.innerHTML = '💬';
    fab.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: hsl(195, 85%, 45%);
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(14, 165, 233, 0.3);
      z-index: 1001;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    fab.addEventListener('mouseenter', () => {
      fab.style.transform = 'scale(1.1)';
      fab.style.boxShadow = '0 15px 40px rgba(14, 165, 233, 0.4)';
    });
    
    fab.addEventListener('mouseleave', () => {
      fab.style.transform = 'scale(1)';
      fab.style.boxShadow = '0 10px 30px rgba(14, 165, 233, 0.3)';
    });
    
    let isOpen = false;
    fab.addEventListener('click', () => {
      isOpen = !isOpen;
      iframe.style.display = isOpen ? 'block' : 'none';
      fab.innerHTML = isOpen ? '✕' : '💬';
      fab.style.background = isOpen ? '#ef4444' : 'hsl(195, 85%, 45%)';
    });
    
    document.body.appendChild(fab);
    
    // Auto-open the chatbot when the page loads
    setTimeout(() => {
      isOpen = true;
      iframe.style.display = 'block';
      fab.innerHTML = '✕';
      fab.style.background = '#ef4444';
    }, 1000); // Open after 1 second
    
    // Cleanup function
    return () => {
      document.body.removeChild(iframe);
      document.body.removeChild(fab);
      mediaQuery.removeListener(updateIframeSize);
    };
  }, []);

  return null; // This component doesn't render anything directly
};
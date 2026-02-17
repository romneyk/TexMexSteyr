import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola Amigo! Pepe hier. Lust auf einen Drink an der Bar oder ein saftiges Steak? Ich helfe dir!', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(history, userMsg.text);

    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300 animate-float border border-red-500/50 ${
          isOpen ? 'bg-zinc-800 rotate-90 text-gray-400' : 'bg-black text-texmex-red hover:bg-texmex-red hover:text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-zinc-900 rounded-lg shadow-2xl border border-gray-800 overflow-hidden flex flex-col max-h-[600px] h-[80vh]">
          {/* Header */}
          <div className="bg-black p-4 flex items-center gap-3 border-b border-gray-800">
            <div className="bg-texmex-red p-2 rounded-full">
              <Bot className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-wide font-display">Pepe</h3>
              <p className="text-xs text-texmex-orange flex items-center gap-1 font-mono">
                <span className="w-2 h-2 bg-texmex-orange rounded-full animate-pulse"></span> At the Bar
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-zinc-950/50 space-y-4 scrollbar-hide">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-texmex-red text-white rounded-t-lg rounded-bl-lg'
                      : 'bg-zinc-800 text-gray-200 border border-gray-700 rounded-t-lg rounded-br-lg'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-t-lg rounded-br-lg border border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-gray-800">
            <div className="flex items-center gap-2 bg-black border border-gray-800 rounded-full px-4 py-2 focus-within:border-texmex-red transition-colors">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Frag Pepe..."
                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-200 placeholder-gray-600"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className={`p-2 rounded-full transition-colors ${
                  inputText.trim() && !isLoading ? 'text-texmex-red hover:bg-red-900/20' : 'text-gray-600'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
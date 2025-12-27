'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function ChatPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [messages, setMessages] = useState<Array<{ text: string, sender: 'doctor' | 'patient', time: string }>>([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const patientId = params.id as string;
    const patientName = searchParams.get('patientName') || 'Patient';
    const locale = params.locale as string;
    const t = useTranslations('chat');

    useEffect(() => {
        setMessages([
            {
                text: `${t('greeting')}, أنا ${patientName}. ${t('help')}`,
                sender: 'patient',
                time: new Date().toLocaleTimeString()
            }
        ]);
    }, [patientName, t]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const doctorMessage = {
            text: newMessage,
            sender: 'doctor' as const,
            time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, doctorMessage]);
        setNewMessage('');

        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: `${t('thankYou')} ${newMessage.includes('؟') ? t('replySoon') : t('received')}`,
                sender: 'patient',
                time: new Date().toLocaleTimeString()
            }]);
        }, 1000);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="bg-[#0d6efd] text-white p-4 flex items-center">
                <button
                    onClick={() => router.push(`/${locale}/patients`)}
                    className="mr-4 p-2 rounded-full hover:bg-blue-700"
                >
                    <FaArrowLeft size={18} />
                </button>
                <h1 className="text-xl font-semibold">
                    {t('chatWith')} {patientName}
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === 'doctor'
                                ? 'bg-blue-500 text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none shadow'}`}
                        >
                            <p>{message.text}</p>
                            <p className={`text-xs mt-1 ${message.sender === 'doctor' ? 'text-blue-100' : 'text-gray-500'}`}>
                                {message.time}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="bg-white p-4 border-t border-gray-200">
                <div className="flex">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={t('inputPlaceholder')}
                        className="flex-1 text-end border text-black border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-[#0d6efd] text-white px-4 rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        <FaPaperPlane size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

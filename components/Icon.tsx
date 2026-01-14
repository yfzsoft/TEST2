import React from 'react';
import { Camera, Flame, ShieldAlert, Lock, Menu, X, Phone, CheckCircle, ArrowRight, MessageSquare, Send } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const icons: Record<string, React.ReactNode> = {
    camera: <Camera size={size} className={className} />,
    fire: <Flame size={size} className={className} />,
    shield: <ShieldAlert size={size} className={className} />,
    lock: <Lock size={size} className={className} />,
    menu: <Menu size={size} className={className} />,
    close: <X size={size} className={className} />,
    phone: <Phone size={size} className={className} />,
    check: <CheckCircle size={size} className={className} />,
    arrowRight: <ArrowRight size={size} className={className} />,
    chat: <MessageSquare size={size} className={className} />,
    send: <Send size={size} className={className} />
  };

  return <>{icons[name] || null}</>;
};
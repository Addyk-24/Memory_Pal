
import { motion } from "framer-motion";
import { Bot, User, Bug, Shield } from "lucide-react";


interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    citations: string;
    timestamp: string;
}

export const ChatMessage = ({ role, content, citations, timestamp }: ChatMessageProps) => {
    const safeContent = typeof content === "string"
    ? content
    : JSON.stringify(content, null, 2);

  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-4 ${isUser ? "flex-row-reverse" : ""}`}
    >
        <div
        
        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
          isUser
            ? "bg-secondary"
            : citations === "Get Citation"
            ? "bg-hawk-amber/20"
            : "bg-primary/20"
        }`}
        >
        </div>


    </motion.div>
  )
}

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm here to help you learn about Comforting Care Solutions. How can I assist you today?",
    isBot: true,
    timestamp: new Date(),
    quickReplies: [
      "Tell me about your services",
      "What are your prices?",
      "How do I get started?",
      "Contact information",
    ],
  },
];

const botResponses: Record<string, { text: string; quickReplies?: string[] }> =
  {
    "tell me about your services": {
      text: "We offer comprehensive home care services including:\n\n• Companionship and emotional support\n• Meal preparation and nutrition\n• Home management and housekeeping\n• Medical assistance and medication reminders\n• Shopping and errands\n• Pet care and dog walking\n• Special requests tailored to your needs\n\nWould you like to know more about any specific service?",
      quickReplies: [
        "Companionship services",
        "Medical assistance",
        "Pricing information",
        "Contact us",
      ],
    },
    "what are your prices": {
      text: "Our pricing is transparent and competitive:\n\n• Essential Care: £15/hour\n• Comprehensive Care: £20/hour\n• Premium Care: £28/hour\n\nWe also offer money-saving packages for regular care. All plans include qualified caregivers, insurance, and 24/7 support.\n\nWould you like a personalized quote?",
      quickReplies: [
        "Get a quote",
        "Package deals",
        "What's included?",
        "Contact us",
      ],
    },
    "how do i get started": {
      text: "Getting started is easy!\n\n1. Contact us for a free consultation\n2. We'll assess your needs and preferences\n3. Create a personalized care plan\n4. Match you with the perfect caregiver\n5. Begin your care journey\n\nWould you like to schedule your free consultation now?",
      quickReplies: [
        "Schedule consultation",
        "Call us now",
        "Learn more",
        "Email us",
      ],
    },
    "contact information": {
      text: "Here's how to reach us:\n\n📞 Phone: +44 1322 329735\n📧 Email: info@comfortingcaresolutions.co.uk\n📍 Address: 63-66 Hatton Garden, London EC1N 8LE\n\n🕒 Available 24/7 for emergency care\n\nHow would you prefer to get in touch?",
      quickReplies: ["Call now", "Send email", "Schedule visit", "Learn more"],
    },
    "companionship services": {
      text: "Our companionship services provide:\n\n• Friendly conversation and social interaction\n• Engaging activities like games and reading\n• Emotional support and genuine care\n• Help with hobbies and interests\n• Accompaniment to social events\n\nCompanionship helps combat loneliness and improves overall wellbeing. Would you like to know more?",
      quickReplies: [
        "Book companionship",
        "Pricing details",
        "Other services",
        "Contact us",
      ],
    },
    "medical assistance": {
      text: "Our medical assistance includes:\n\n• Medication reminders and management\n• Appointment coordination\n• Health monitoring and vital signs\n• Communication with doctors\n• Emergency response support\n• Post-surgery recovery care\n\nAll our caregivers are trained in medical support. Need more information?",
      quickReplies: [
        "Schedule assessment",
        "Caregiver qualifications",
        "Emergency support",
        "Contact us",
      ],
    },
    default: {
      text: "I understand you're interested in our care services. For specific questions or to speak with a care specialist, please contact us directly:\n\n📞 +44 1322 329735\n📧 info@comfortingcaresolutions.co.uk\n\nOur team is available 24/7 to help you!",
      quickReplies: ["Call us now", "Our services", "Get a quote", "Email us"],
    },
  };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Check for exact matches first
    if (botResponses[normalizedMessage]) {
      return normalizedMessage;
    }

    // Check for partial matches
    for (const key in botResponses) {
      if (
        normalizedMessage.includes(key.split(" ")[0]) ||
        key.includes(normalizedMessage.split(" ")[0])
      ) {
        return key;
      }
    }

    // Check for common variations
    if (
      normalizedMessage.includes("price") ||
      normalizedMessage.includes("cost")
    ) {
      return "what are your prices";
    }
    if (
      normalizedMessage.includes("service") ||
      normalizedMessage.includes("help")
    ) {
      return "tell me about your services";
    }
    if (
      normalizedMessage.includes("start") ||
      normalizedMessage.includes("begin")
    ) {
      return "how do i get started";
    }
    if (
      normalizedMessage.includes("contact") ||
      normalizedMessage.includes("phone") ||
      normalizedMessage.includes("call")
    ) {
      return "contact information";
    }

    return "default";
  };

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const responseKey = getBotResponse(messageText);
        const response = botResponses[responseKey] || botResponses.default;

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          isBot: true,
          timestamp: new Date(),
          quickReplies: response.quickReplies,
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-care-500 hover:bg-care-600"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 sm:w-96">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-care-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Care Assistant</h3>
                  <p className="text-xs text-care-100">
                    Online • Ready to help
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div
                      className={cn(
                        "flex items-start space-x-2",
                        message.isBot ? "justify-start" : "justify-end",
                      )}
                    >
                      {message.isBot && (
                        <div className="bg-care-100 p-2 rounded-full flex-shrink-0">
                          <Bot className="h-4 w-4 text-care-600" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-xs lg:max-w-md px-3 py-2 rounded-lg text-sm whitespace-pre-line",
                          message.isBot
                            ? "bg-gray-100 text-gray-800"
                            : "bg-care-500 text-white",
                        )}
                      >
                        {message.text}
                        <div
                          className={cn(
                            "text-xs mt-1 opacity-70",
                            message.isBot ? "text-gray-500" : "text-care-100",
                          )}
                        >
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                      {!message.isBot && (
                        <div className="bg-care-500 p-2 rounded-full flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Quick Replies */}
                    {message.isBot && message.quickReplies && (
                      <div className="ml-12 mt-2 flex flex-wrap gap-1">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-7 px-2 border-care-300 text-care-700 hover:bg-care-50"
                            onClick={() => handleQuickReply(reply)}
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-2">
                    <div className="bg-care-100 p-2 rounded-full">
                      <Bot className="h-4 w-4 text-care-600" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage(inputValue);
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    size="icon"
                    className="bg-care-500 hover:bg-care-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex justify-center space-x-2 mt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => window.open("tel:+441322329735")}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() =>
                      window.open("mailto:info@comfortingcaresolutions.co.uk")
                    }
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleSendMessage("Schedule consultation")}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Book
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

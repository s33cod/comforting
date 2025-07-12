import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsArticle {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content?: string;
}

interface NewsArticleModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

const getFullArticleContent = (title: string): string => {
  const articles: Record<string, string> = {
    "New Partnership with Local NHS Trust Enhances Medical Support": `
      <p>We are excited to announce our new strategic partnership with the Regional NHS Trust, a collaboration that will significantly enhance the medical support and coordination we provide to our clients. This partnership represents a major milestone in our mission to deliver exceptional home care services.</p>
      
      <h3>What This Means for Our Clients</h3>
      <p>This partnership ensures seamless healthcare delivery right in your home, with improved coordination between our care team and NHS medical professionals. Our clients will benefit from:</p>
      <ul>
        <li>Direct communication channels with NHS healthcare providers</li>
        <li>Streamlined appointment scheduling and medical coordination</li>
        <li>Enhanced emergency response protocols</li>
        <li>Improved medication management and monitoring</li>
        <li>Access to NHS resources and specialist services</li>
      </ul>
      
      <h3>Enhanced Care Coordination</h3>
      <p>The partnership establishes direct communication channels between our caregivers and NHS medical teams, ensuring that any health concerns are addressed promptly and appropriately. This collaboration means that our clients receive the best of both worlds: the comfort and familiarity of home care with the medical expertise and resources of the NHS.</p>
      
      <h3>Training and Development</h3>
      <p>As part of this partnership, our care team will receive additional training from NHS professionals, ensuring they are equipped with the latest knowledge and best practices in healthcare delivery. This ongoing education program will cover areas such as medication management, health monitoring, and emergency response procedures.</p>
      
      <h3>Looking Forward</h3>
      <p>This partnership is just the beginning of our efforts to continually improve and expand our services. We are committed to staying at the forefront of home care innovation and providing our clients with the highest quality care possible.</p>
    `,
    "Winter Care Tips: Keeping Seniors Safe and Warm": `
      <p>As the winter months approach, it's crucial to take extra precautions to ensure the safety and comfort of elderly loved ones. Cold weather presents unique challenges for seniors, from increased risk of falls due to icy conditions to the higher likelihood of illness.</p>
      
      <h3>Home Safety Preparations</h3>
      <p>Preparing the home for winter is essential for senior safety:</p>
      <ul>
        <li>Ensure heating systems are functioning properly and efficiently</li>
        <li>Check and replace weather stripping around doors and windows</li>
        <li>Clear pathways of ice and snow to prevent falls</li>
        <li>Stock up on essential supplies including medications</li>
        <li>Test smoke and carbon monoxide detectors</li>
      </ul>
      
      <h3>Health and Wellness</h3>
      <p>Winter can take a toll on senior health, both physically and mentally. Here are key areas to focus on:</p>
      <ul>
        <li>Maintain a warm, comfortable indoor temperature (at least 68°F)</li>
        <li>Ensure adequate nutrition with warm, nutritious meals</li>
        <li>Stay hydrated despite reduced thirst sensation in cold weather</li>
        <li>Continue regular exercise indoors when outdoor activities aren't safe</li>
        <li>Monitor for signs of seasonal depression and social isolation</li>
      </ul>
      
      <h3>Emergency Preparedness</h3>
      <p>Winter weather can lead to power outages and other emergencies. Seniors should have:</p>
      <ul>
        <li>Emergency contact list readily available</li>
        <li>Backup heating source if possible</li>
        <li>Flashlights and extra batteries</li>
        <li>Non-perishable food and water supplies</li>
        <li>Battery-powered or hand-crank radio</li>
      </ul>
      
      <p>Our care team is specially trained to help seniors navigate the winter months safely. If you have concerns about winter care for yourself or a loved one, don't hesitate to reach out to us.</p>
    `,
    "Celebrating 10 Years of Compassionate Care": `
      <p>This month marks a significant milestone for Comforting Care Solutions - our 10th anniversary! For a decade, we have been honored to serve families across our community, providing compassionate, professional care that helps people maintain their independence and dignity at home.</p>
      
      <h3>A Journey of Growth and Learning</h3>
      <p>When we first opened our doors in 2014, our founder Comfort Akiga had a simple but powerful vision: to provide the kind of care she would want for her own family members. What started as a small team has grown into a comprehensive care organization, but our core values remain unchanged.</p>
      
      <h3>By the Numbers</h3>
      <p>Over the past 10 years, we have:</p>
      <ul>
        <li>Served over 500 families in our community</li>
        <li>Provided more than 100,000 hours of care</li>
        <li>Maintained a 98% client satisfaction rate</li>
        <li>Expanded from 3 to 25 trained caregivers</li>
        <li>Added specialized services including medical assistance and pet care</li>
      </ul>
      
      <h3>Client Stories That Inspire Us</h3>
      <p>Every family we serve has a unique story, and each one reminds us why we do this work. From helping a client return home after surgery to providing companionship during difficult times, these moments of connection and care are what drive us forward.</p>
      
      <h3>Looking to the Future</h3>
      <p>As we look ahead to the next decade, we remain committed to innovation and excellence in home care. We are exploring new technologies, expanding our service offerings, and continuing to invest in the training and development of our care team.</p>
      
      <p>Thank you to every family who has trusted us with their care. Here's to the next 10 years of serving our community with compassion and dedication.</p>
    `,
  };

  return (
    articles[title] ||
    `
    <p>Thank you for your interest in this article. This is a comprehensive piece about ${title.toLowerCase()} and its impact on our community and services.</p>
    
    <p>Our team is constantly working to provide valuable insights and updates about home care, health and wellness, and community initiatives. This article represents our ongoing commitment to keeping our clients and their families informed about important developments in the care industry.</p>
    
    <p>For more detailed information about this topic or to discuss how it might relate to your specific care needs, please don't hesitate to contact our team directly. We're always happy to provide personalized guidance and answer any questions you may have.</p>
    
    <p>Stay tuned for more updates and insights from Comforting Care Solutions as we continue to serve our community with dedication and compassion.</p>
  `
  );
};

export default function NewsArticleModal({
  article,
  isOpen,
  onClose,
}: NewsArticleModalProps) {
  if (!isOpen || !article) return null;

  const fullContent = getFullArticleContent(article.title);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-care-100 text-care-700 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-0">
          {/* Article Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            {/* Article Header */}
            <h1 className="text-2xl md:text-3xl font-bold text-care-800 mb-4">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-4 border-b">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="max-h-96 overflow-y-auto">
              <div
                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: fullContent }}
              />
            </div>

            {/* Article Actions */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              <Button onClick={onClose}>Close Article</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

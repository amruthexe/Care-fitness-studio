import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import ConnectWithUs from "@/components/ConnectWithUs";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import GymOwner from "@/components/GymOwner";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import MembershipCard from "@/components/MembershipCard";
import Personal from "@/components/Personal";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import VideoPlayer from "@/components/VideoPlayer";
import ZumbaDance from "@/components/ZumbaDance";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
           {/* Hero Video Section */}
           <div className="mb-16">
           <VideoPlayer 
  thumbnailUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
  videoUrl="/assets/img/tour.mp4"  // Assuming the video is in the public folder
/>

        </div>
      <Classes />
      <Team />
      <ZumbaDance/>
      <Membership />
      <Personal/>
      <Testimonial />
      {/* <FocusCardsDemo/> */}
  
<GymOwner/>
      <Blog />
  
      <Brands />
      <ConnectWithUs/>
      {/* temporary div */}
      {/* <div className="h-[3000]"></div> */}
    </main>
    
  );
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./about.css";
import SectionHeader from "../SectionHeader";
import useOnScreen from "../../hooks/useOnScreen";
import SplitText from "../../utils/Split3.min";
import cn from 'classnames';

export default function About(){
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);
  
    useEffect(() => {
      if (onScreen) setReveal(onScreen);
    }, [onScreen]);
    useEffect(() => {
        if(reveal){
        const split = new SplitText("#headline", {
            type: "lines",
            
            });      
          
            gsap.to(split.lines, {
            duration: 1,
            y: -20,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            });
    }
      }, [reveal]);
    return(
        <section  className={cn("about-section", { "is-reveal": reveal })} data-scroll-section>
          <SectionHeader title='about'/>
          <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
            Flirty Flowers is a blog about flowers and the floral designers who make
            them into art. Creativity and the art of ‘making’ require dialogue. The
            full purpose of the Flirty Flowers blog is to encourage and inspire. We
            value art, we value insight, and we value opinion.</p>
        </section>
    )
}

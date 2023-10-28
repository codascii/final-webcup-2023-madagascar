import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Socila from "../socila/Socila";
import blog_details2 from "/public//img/bog-capabilities/blog-details2.jpg";
import touch1 from "/public//img/bog-capabilities/touch1.jpg";
import touch2 from "/public//img/bog-capabilities/touch2.jpg";
import touch3 from "/public//img/bog-capabilities/touch3.jpg";
import blog_details1 from "/public/img/bog-capabilities/blog-details1.png";

const Details = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wXNv-x5zVgE"
        onClose={() => setOpen(false)}
      />

      <div className="machine__learning__box mb-5">
        <div className="details__thumb">
          <Image src={blog_details1} alt="details" className="img-fluid" />
        </div>
        <div className="content">
          <h2 className="headtext">
            Google has announced plans to integrate AI into its search engine to
            provide
          </h2>
          <ul className="admin__wrap">
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">group</i>
              </span>
              <span>Admin</span>
            </li>
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">event_available</i>
              </span>
              <span>15-12-2023</span>
            </li>
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">forum</i>
              </span>
              <span>Comments(144)</span>
            </li>
          </ul>
          <p className="text1">
            Google has been investing in AI and machine learning technologies
            for several years, and has integrated these technologies into
            various products and services, including its search engine. The goal
            of this integration is to provide more relevant and accurate results
            for users, based on their search history, location, and other
            factors.
          </p>
          <div className="more__details__thumb">
            <div className="more__details__item">
              <Image src={touch1} alt="img" className="img-fluid" />
            </div>
            <div className="more__details__item">
              <Image src={touch2} alt="img" className="img-fluid" />
            </div>
          </div>
          <p className="pb__20">
            Google&#39;s AI algorithms can now understand the context and intent
            behind a user&#39;s search query and provide results that are
            tailored to their specific needs. This integration has improved the
            accuracy and relevance of search results, making it easier for users
            to find what they are looking for.
          </p>
          <p>
            In addition to improving the search experience, Google is also using
            AI to enhance other areas of its business, including voice
            recognition, image and video analysis, and natural language
            processing. This investment in AI technology is part of Google&#39;s
            larger strategy to stay ahead of the competition and offer
            innovative products and services to its users.
          </p>
          <div className="touch__standard">
            <div className="thumb">
              <Image src={touch3} alt="img" />
            </div>
            <div className="touch__box">
              <p className="ttext">
                Autocomplete: Google&#39;s search engine now includes an
                autocomplete feature, which uses AI algorithms to predict and
                suggest search queries as users type. This helps users find what
                they are looking for more quickly and efficiently.
              </p>
              <p>
                Voice Search: Google has integrated voice search into its search
                engine, allowing users to perform searches using just their
                voice. The voice search function uses AI algorithms to
                transcribe and understand spoken language, providing users with
                accurate results in real-time.
              </p>
            </div>
          </div>
          <p className="pb__20">
            Here are some additional details about Google&#39;s integration of
            AI into its search engine:
          </p>
          <ul className="machine__listing">
            <li>
              <span>1.</span>
              <span>
                Contextual Understanding: Google&#39;s AI algorithms can now
                understand the context behind a user&#39;s search query and
                provide results that are relevant to their specific needs. For
                example, if a user searches for best pizza in New York, the
                search engine will take into account the user&#39;s location and
                provide results for the best pizza places in the vicinity.
              </span>
            </li>
            <li>
              <span>2.</span>
              <span>
                Personalized Results: Google&#39;s AI algorithms can now
                personalize search results based on a user&#39;s search history,
                location, and other factors. This means that users will receive
                results that are tailored to their specific interests and
                preferences.
              </span>
            </li>
            <li>
              <span>3.</span>
              <span>
                Natural Language Processing: Google has integrated natural
                language processing into its search engine, allowing users to
                search for information using conversational language rather than
                traditional search queries. This has made search more intuitive
                and easier to use.
              </span>
            </li>
          </ul>
          <p className="pt__15">
            These efforts demonstrate Google&#39;s commitment to improving the
            search experience and staying ahead of the competition in the
            rapidly evolving field of AI and machine learning. The company
            continues to invest in AI research and development, and it is likely
            that additional AI-powered features and improvements will
          </p>
          <div className="video__thumb">
            <Image src={blog_details2} alt="img" />
            <button
              // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
              className="play__btn video-btn border-0 text-white"
              onClick={() => setOpen(true)}
            >
              <i className="material-symbols-outlined">play_arrow</i>
            </button>
          </div>
          <p className="pb__20">
            Google&#39;s AI algorithms can now understand the context and intent
            behind a user&#39;s search query and provide results that are
            tailored to their specific needs. This integration has improved the
            accuracy and relevance of search results, making it easier for users
            to find what they are looking for.
          </p>
          <p>
            In addition to improving the search experience, Google is also using
            AI to enhance other areas of its business, including voice
            recognition, image and video analysis, and natural language
            processing. This investment in AI technology is part of Google&#39;s
            larger strategy to stay ahead of the competition and offer
            innovative products and services to its users.
          </p>
          <div className="standard__footer">
            <Link href="/blog-details" className="standard___btn">
              <span className="icon">
                <i className="material-symbols-outlined">keyboard_backspace</i>
              </span>
              <span>Previous Post</span>
            </Link>

            {/* Socila */}
            <Socila />

            <Link href="/blog-details" className="standard___btn2">
              <span>Next Post</span>
              <span className="icon">
                <i className="material-symbols-outlined">trending_flat</i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

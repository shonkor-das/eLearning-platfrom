import React from 'react';
import './FaqSection.css'
import faqImg from '../../resource/faq.png'

const FaqSection = () => {
  return (
    <div className='container py-5'>
      <div className='row align-items-center gap-5'>
        <div className='col-12 col-lg-6'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is an ethical hacker?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  An ethical hacker is someone who finds vulnerabilities in a system or network, takes the necessary steps to resolve the issue, and may work on new software products. Ethical hackers are valuable to any organization because they are skilled at finding flaws that may lead to problems down the line. They do this by trying different ways of gaining access without having authorized access, looking for ways that an unauthorized person might be able to break into a computer system, testing out new software products before they're released for sale on the market.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What you need before starting the course?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Since we are teaching from scratch. So you don't need to know anything beforehand. But if you have time, you can do these three things. 1. You need to keep some brain space to get the things in your head after watching the video. 2. Just joining the course will not make you an auto web developer. Must have a hard-working, stick-to-it mentality. 3. If you get stuck somewhere, you have to have the mentality of asking for help and the will to stick around.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How will i get the course videos?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Course videos will be pre-recorded. You open an account and enroll in this course. Videos will be given one module per day from the start of the course. Each module usually has 10 to 12 videos. You have to finish watching these videos within the day they are released. Therefore, dedicated time should be kept daily for the course. And during that time, you can watch the video lying down, standing, leaning, swinging your legs, dancing, or even hiding under the bed.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How much time will take to complete the course?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFrour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  If you watch videos for 1 to 1.5 hours every day, along with extra 4 to 6 hours of practice, it will take you about 5 months. However, sometimes extra time should be reserved for homework and take away projects. Must bring hard work mentality. There are no cheats or shortcuts.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-5'>
          <img src={faqImg} className='img-fluid ZoomIn' alt="" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
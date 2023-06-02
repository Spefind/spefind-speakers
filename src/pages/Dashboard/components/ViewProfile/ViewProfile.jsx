import "./ViewProfile.module.css"
import coverBanner from "../../assets/coverBanner.svg"
import userImg from "../../assets/userImg.svg"
import event from "../../assets/event.png"
import styles from "./ViewProfile.module.css"

const ViewProfile = () => {
  return (
    <div className={styles.coverBanner}>
      <img src={coverBanner} alt='cover banner of the speaker' />
      <div className={styles.speakerDetails}>
        <h4>Hi! I’m Titilayo</h4>
        <p>Media speaker</p>
      </div>
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={userImg} alt=' the speaker ' />
          <button>Edit Profile</button>
        </div>
        <div className={styles.aboutTextContainer}>
          <h5>ABOUT ME</h5>
          <p>
            A Lagos State resident in charge of drafting over 10 statements per mount and speaking with radio and television media about the
            clients' ongoing or forthcoming events organize and arrange more than 20 speaking appearances. Conduct Training in product usage
            and product demos for clients, new hires, and independent contractors. Prepare concepts for new clients who use commercial spots
            to market their brands.
            <span> show more</span>
          </p>
          <div className={styles.speakerRating}>
            <span>
              100% <p>Jobs Completed</p>
            </span>
            <span>
              100% <p>On A Budget</p>
            </span>
            <span>
              100% <p>On Time</p>
            </span>
            <span>
              100% <p>Professional</p>
            </span>
          </div>
        </div>
      </div>
      <h4 className={styles.pasteventsHeading}>PAST EVENTS</h4>
      <div className={styles.pastEventsContainer}>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
        <div>
          <div className={styles.singleEvents}>
            <img src={event} alt='past event' />
            <div className={styles.eventDetails}>
              <h6>TEDx</h6>
              <p>May 17, 2022</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile

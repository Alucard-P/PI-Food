import styles from "./About.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import perfil from "../../Images/perfil.jpg";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.grid_nav}>
        <NavBar />
      </div>
      <div className={styles.grid_about}>
        <div className={styles.content}>
          <section className={styles.background}>
            <h1>Welcome</h1>
            <p className={styles.prueba}>
              Hello! I'm Paul, a passionate Full Stack Developer and
              Mechatronics Engineer with analytical skills developed throughout
              my career to solve problems and continuously improve processes. I
              consider myself a person who seeks new challenges and ventures
              outside my comfort zone to grow and enhance my skills in the field
              of technology. I studied Mechatronics Engineering, which has given
              me a significant advantage in the programming world, as I have
              developed analytical and problem-solving abilities that I apply
              daily. Thanks to my passion for technology, I have created an
              individual project within Henry Bootcamp: a food recipe SPA that
              utilizes an external API to obtain a wide variety of culinary
              options. Users have the ability to add their own recipes through a
              form with strict validations. The platform features an advanced
              filtering and sorting system for recipes, as well as a detailed
              page for each recipe. Technologies such as PostgreSQL, Sequelize,
              Express, React, Redux, and pure CSS were used for its development.
              Additionally, I ensured a fast and secure experience for users by
              deploying it using Railway for the back-end and Vercel for the
              front-end. I would love to share with you this exciting
              combination of my skills and passion for technology on my personal
              page.
            </p>
            <a
              href="https://portfolio-alucard-p.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.button}>Click Me</button>
            </a>
          </section>
        </div>
        <div className={styles.content_img}>
          <img src={perfil} alt="perfil" className={styles.image} />
        </div>
      </div>

      <div className={styles.grid_footer}>
        <Footer />
      </div>
    </div>
  );
};

export default About;

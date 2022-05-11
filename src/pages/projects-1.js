import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link } from "gatsby"

// Works Images
import WorksImage1 from "../assets/images/works-image/works-image1.jpg"
import WorksImage2 from "../assets/images/works-image/works-image2.jpg"
import WorksImage3 from "../assets/images/works-image/works-image3.jpg"
import WorksImage4 from "../assets/images/works-image/works-image4.jpg"
import WorksImage5 from "../assets/images/works-image/works-image5.jpg"
import WorksImage6 from "../assets/images/works-image/works-image6.jpg"
import WorksImage7 from "../assets/images/works-image/works-image7.jpg"
import WorksImage8 from "../assets/images/works-image/works-image8.jpg"
import WorksImage9 from "../assets/images/works-image/works-image9.jpg"

// Shape Images
import Shape2 from "../assets/images/shape2.svg"
import Shape4 from "../assets/images/shape4.svg"
import { useState } from "react"

const Projects1 = () => {
  const [active, setActive] = useState(0)
  const projectArray = [
    {
      image: WorksImage1,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage2,
      title: "Lorem2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage3,
      title: "Lorem3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage4,
      title: "Lorem4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage5,
      title: "Lorem5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage6,
      title: "Lorem6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage7,
      title: "Lorem7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage8,
      title: "Lorem8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
    {
      image: WorksImage9,
      title: "Lorem9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem?",
    },
  ]
  return (
    <Layout>
      <SEO title="Projects" />

      <Navbar />

      {/* <PageBanner pageTitle="Projects Style One" /> */}

      <div
      
        className="works-area new_project  pb-50"
      >
        <div className="img_container">
         {
           projectArray.map((item, ind)=>(
            <img
            key={ind}
            className={ind === active ? "img_animated": "img_animated_none"}
              src={item.image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
           ))
         }
        </div>
        <div className="desc_container">
          {projectArray.map((item, ind) => (
            <div
              key={ind}
              onMouseOver={()=>setActive(ind)}
              className={
                active === ind ? "single_desc_not_animated" : " single_desc"
              }
            >
              <div className="item_head">
                <span>
                  <span className=" item_title">{item.title}</span>
                  <div className=" item_title_border"></div>
                </span>
              </div>
              <div className="item_tail">
                <span className=" item_desc">
                  {item.description}
                </span>
                <div>
                  <div>
                    <Icon.ArrowRight className="animated_icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Projects1

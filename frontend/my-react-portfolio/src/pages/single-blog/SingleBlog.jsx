import React from "react";
import { Footer, Navbar } from "../../components";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./single-blog.css";

const SingleBlog = () => {
  return (
    <>
      <Navbar />
      <div className="dami__singleblog section__padding section__margin">
        <div className="dami__singleblog-head">
          <div className="dami__singleblog-head_content">
            <div className="dami__singleblog-head_content-info">
              <div>
                <h4>Date</h4>
                <h4>10 min read</h4>
              </div>
              <h2>Blog Title</h2>
              <p>
                Blog Short Description. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dignissimos, ea?{" "}
              </p>
            </div>
            <div className="dami__singleblog-head_content-author">
              <div className="dami__singleblog-head_content-author_image">
                <img
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="dami__singleblog-head_content-author_details">
                <h5>Author Name</h5>
                <p>Author Job Title</p>
              </div>
            </div>
          </div>
          <div className="dami__singleblog-head_image">
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="dami__singleblog-body">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            itaque vero asperiores dolores sunt cupiditate vel voluptates
            perferendis sint enim, rem minus iste ipsum officia voluptas maiores
            magni laborum pariatur aliquid deserunt officiis illo eaque nam
            omnis? Reiciendis quaerat earum ipsa et, officiis optio assumenda
            accusamus? Asperiores quo, maiores facere quisquam magnam numquam
            consectetur ipsum placeat quasi reiciendis vitae unde ea incidunt
            et. Necessitatibus voluptate veniam eveniet dolores iste,
            consequuntur vero iure blanditiis ad nobis nam assumenda
            perspiciatis quisquam, qui sunt officiis, minus praesentium
            quibusdam animi! Architecto sapiente placeat odit. Odit voluptates
            ratione id, ex recusandae consectetur officiis facere fugiat, sint
            deleniti, laborum quisquam fuga doloremque expedita labore dicta
            laboriosam. Magnam non inventore, enim quam iure beatae alias esse
            rerum unde eligendi libero hic? Sunt rerum ab, et fuga, placeat
            eveniet unde consectetur voluptates accusamus soluta molestiae
            molestias enim recusandae dolorum in doloremque amet ducimus
            delectus, ullam ipsum. Dolorem aliquam sapiente itaque deleniti
            minus quam dolorum suscipit ratione consequatur id, nemo quaerat
            nisi quod corrupti natus beatae amet dicta doloremque, similique
            delectus alias. Consectetur possimus dolorem veritatis eum, quod
            placeat modi nesciunt libero. Odio corporis officia nulla magni
            error quos blanditiis, ea rerum. Earum autem quos, quidem sequi
            sapiente eos! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolore repellendus inventore ex harum nesciunt earum aut
            voluptas odit, placeat reiciendis doloribus porro suscipit, nihil
            quaerat praesentium dignissimos eligendi quidem accusamus blanditiis
            aperiam? Dignissimos recusandae reiciendis quaerat nisi aspernatur
            enim ea deserunt illum alias tempore? Reiciendis vitae commodi
            accusantium asperiores fugiat, explicabo necessitatibus ex veritatis
            ab nobis? Exercitationem distinctio tenetur rerum. Quia tenetur
            suscipit quam voluptas? Nulla at quas velit necessitatibus!
            Asperiores fugit aperiam, cupiditate, deleniti minus quisquam
            officia veniam natus pariatur dolorem provident incidunt magnam
            alias accusamus culpa. Adipisci, maxime modi. Beatae voluptate
            officia illum voluptatum quibusdam distinctio? Voluptate, ducimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum repellendus? Id vitae ex ratione enim sunt
            repellendus laudantium qui officiis numquam voluptates quibusdam
            ullam necessitatibus repudiandae, rerum mollitia possimus assumenda
            cupiditate ipsum cumque! Magnam eius eaque atque, error porro veniam
            aut optio quos provident a inventore deserunt facere rerum? Ut
            reiciendis perferendis odio corrupti sint officia accusantium nulla
            officiis architecto provident? Quos dolore quia at velit? Ratione
            perferendis ut quisquam mollitia quibusdam alias accusantium officia
            esse? Ab dolorum mollitia quidem aliquam est iste deleniti ea ad
            alias. Quae fugiat atque, hic quos earum blanditiis delectus
            repellendus. Quas laborum id molestiae. Porro veritatis corporis
            exercitationem neque quod ratione, maxime quaerat esse officiis quis
            incidunt dolore animi doloribus ad labore pariatur, distinctio
            repudiandae minus excepturi maiores reprehenderit ducimus. Ut enim
            ex eveniet ipsum eius? Eveniet obcaecati voluptate illum itaque
            alias iure culpa aut, commodi totam cupiditate cum porro quos minima
            quia impedit eaque doloribus temporibus ex accusamus maxime suscipit
            necessitatibus nulla dignissimos! Perspiciatis dolor delectus
            mollitia repellendus tenetur reiciendis voluptates inventore, iste
            possimus dignissimos ipsa rem velit dolore consequatur id similique.
            Vero perferendis quasi corporis, accusantium quos quidem saepe
            assumenda quod cum blanditiis voluptatum deserunt, magni odit ab
            facere commodi atque?{" "}
          </p>
        </div>
        <div className="dami__singleblog-related">
          <div>
            <HiArrowLeft />
            <p>Previous</p>
          </div>
          <div className="dami__singleblog-related_flip">
            <HiArrowRight />
            <p>Next</p>
          </div>
        </div>
        <div className="dami__singleblog-cta">
          <p>facebook</p>
          <p>linkedin</p>
          <p>twitter</p>
          <p>comment</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlog;

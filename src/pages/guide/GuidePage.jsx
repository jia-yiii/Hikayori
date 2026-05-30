import style from "@/pages/guide/guidePage.module.scss";

function GuidePage() {
  return (
    <main>
      <section className={style.hero}>
        <div className={`container ${style.heroCopy}`}>
          <h1>日和指南</h1>
          <p>從認識、測量到配戴，</p>
          <p>一步步了解什麼是穿戴甲</p>
        </div>
      </section>
      <section className="container">
        <h2 className="fs-4 my-10">什麼是穿戴甲</h2>
      </section>
      <section className="container">
        <h2 className="fs-4 my-10">穿戴甲與凝膠的差異</h2>
      </section>
      <section className="container">
        {" "}
        <h2 className="fs-4 my-10">甲型與長度的介紹</h2>
      </section>
      <section className="container">
        {" "}
        <h2 className="fs-4 my-10">如何挑選適合的尺寸</h2>
      </section>
      <section className="container">
        {" "}
        <h2 className="fs-4 my-10">如何配戴穿戴甲</h2>
      </section>
      <section className="container">
        {" "}
        <h2 className="fs-4 my-10">如何卸除穿戴甲</h2>
      </section>
    </main>
  );
}

export default GuidePage;

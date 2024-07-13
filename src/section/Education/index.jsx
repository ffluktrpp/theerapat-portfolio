import { useEffect } from "react";

function Education({ onInitial }) {
  useEffect(() => {
    onInitial("Education-section");
  }, []);
  return (
    <div
      className="bg-primarySubContent rounded-lg p-2 scroll-m-14"
      id="Education-section"
    >
      <div className="text-primaryTitle text-lg font-medium">Education</div>
      <div className="lg:flex lg:items-center px-2 py-6 rounded-xl transition-all my-2 hover:bg-primaryAccent">
        <img
          src="https://image.makewebeasy.net/makeweb/m_1920x0/9JBOiaFS4/DefaultData/about.jpg?v=202012190947"
          alt=""
          className="w-56 rounded-full mx-14"
        />
        <div className="p-2">
          <span className="text-primaryTitle font-medium text-lg">
            2014 - 2020
          </span>
          <div className="py-2">Sciences - Mathematics</div>
          <div className="py-2">Phichai Rattanakhan School, Ranong</div>
        </div>
      </div>
      <div className="lg:flex lg:items-center px-2 py-6 rounded-xl transition-all mb-2 hover:bg-primaryAccent">
        <img
          src="https://ikbs.bu.ac.th/wp-content/uploads/2021/08/cropped-budiamond.jpg"
          alt=""
          className="w-56 h-56 object-cover object-[70%_30%] rounded-full mx-14"
        />
        <div className="p-2">
          <span className="text-primaryTitle font-medium text-lg">
            2021 - now
          </span>
          <div className="py-2">Computer Science - ITI</div>
          <div className="py-2">CUM GPA. 3.07</div>
          <div className="py-2">Bangkok University</div>
        </div>
      </div>
    </div>
  );
}

export default Education;

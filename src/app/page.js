import MenuArrow from "@/components/MenuArrow";

export default function Home() {
  return (
    <>

    <div className="flex flex-col h-lvh">
      <div className="h-1/3">
        <div className="container mx-auto relative">
          <div className="flex flex-col gap-2 p-7">
            <div className="h-40 bg-cover bg-[center_-10rem] bg-no-repeat mt-4 rounded-lg" style={{backgroundImage: "url(/img/japen-bg.jpg)"}}></div>
            <div className="absolute bottom-[-10px] left-24 text-blue-500 text-[48px]">Mayes Art</div>
          </div>
        </div>
      </div>
      <div className="h-2/3 bg-slate-200 text-black bg-no-repeat" style={{backgroundImage: "url(/img/ピンクのエイリアン.png)"}}>
        <div className="container mx-auto">
          <div className="p-5 break-words " >
            <div className="flex justify-center mr-[-150px]">
              <div className="w-[160px] h-[180px] border-2 border-black rounded-lg p-2 bg-slate-200">
                遭遇敵方！！！<br/>
                粉紅單眼巨魔<br/>
                <br/>
                前端需求 100<br/>
                後端需求 100<br/>
                <br/>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-1/6 border-2 border-black rounded-lg p-2 bg-slate-200 mr-36 mt-[-30px]">
                是否戰鬥？<br/>
                  <MenuArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[-10]">
        <div className="container mx-auto">
          <div className="flex p-8">
            <div className="w-full text-right">Mayes Art 2024 By Jun.</div>
          </div>
        </div>
      </div>
    </div>



    {/* <div className="container mx-auto px-2 h-full">
      <div className="flex flex-col h-dvh gap-2 mt-5">
        <div className="h-1/4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(/img/japen-bg.jpg)"}}>
          <div className="">Mayes Art</div>
        </div>
        <div className="h-1/2 bg-gray-800 p-5">Something full here.</div>
        <div className="h-1/4 text-right mt-10"></div>
      </div>
      <div className="h-10 text-right mt-10"> 2024. By Jun</div>
    </div> */}
    </>
  );
}

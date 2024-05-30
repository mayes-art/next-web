import MenuArrow from "@/components/MenuArrow";
import { Monster } from '@/components/Monster';
import styles from "../asset/style.scss";
// import '../asset/monster.action.css';

export default function Home() {

  // const flipStyle = {
  //   transform: 'scaleX(-1)',
  // };

  return (
    <>

    <div className="flex flex-col h-dvh">
      <div className="h-40 bg-no-repeat bg-cover" style={{backgroundImage: "url(/img/banner.png)"}}>
        <div className="container mx-auto relative">

            <div className="text-blue-500 text-[48px]">Mayes Art</div>

        </div>
      </div>
      <div className="h-2/3 bg-no-repeat relative" >
        <div className="container mx-auto">
            <div className="flex justify-center p-4">
              <div className="w-[40%] h-[40%] sm:w-[50%] sm:h-[50%] move-around absolute top-[10%]">
                <Monster />
              </div>
              
              <div className="
              w-[150px] h-[160px] sm:w-[200px]
              absolute top-4 right-12 sm:top-20 sm:left-[60%]
              border-2 
              border-black 
              text-black 
              rounded-lg 
              p-2 
              bg-slate-200 
              z-10 
              break-words
              ">
                遭遇敵方！！！<br/>
                黃色八爪巨魔<br/>
                <br/>
                前端需求 100<br/>
                後端需求 100<br/>
                <br/>
              </div>
            </div>
            <div className="flex justify-end z-0">
              <div className="
              w-[100px] sm:w-[120px]
              absolute top-36 right-8 sm:top-56 sm:left-[67%] 
              border-2 border-black rounded-lg 
              p-2 
              bg-slate-200 
              text-black 
              z-10
              ">
                是否戰鬥？<br/>
                  <MenuArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[-20]">
        <div className="container mx-auto">
          <div className="flex p-8">
            <div className="w-full text-right">Mayes Art 2024 By Jun.</div>
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

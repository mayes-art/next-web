
import { Monster } from '@/components/Monster';

export default function Mm() {
    return (
        <>
        <div className="w-full px-4 py-16">
        <div className="w-full p-2 mx-auto bg-blue-50 rounded-2xl">

            {/* <svg viewBox="0 0 800 500" preserveAspectRatio="none" width="100%" id="blobSvg">
                <g transform="translate(131.13905334472656, 16.178787231445312)">
                <path fill="#93c5fd">
                    <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440,311.5Q420,373,362,394.5Q304,416,242.5,439.5Q181,463,128,420Q75,377,66,313.5Q57,250,71,190Q85,130,138.5,100.5Q192,71,248,77.5Q304,84,353.5,111.5Q403,139,431.5,194.5Q460,250,440,311.5Z;  M455,311.5Q419,373,365,405.5Q311,438,249,441.5Q187,445,123.5,416.5Q60,388,59,319Q58,250,90,203.5Q122,157,157,113.5Q192,70,251,67.5Q310,65,343,112Q376,159,433.5,204.5Q491,250,455,311.5Z;   M431,317Q435,384,374,414Q313,444,245.5,457Q178,470,124,425.5Q70,381,47.5,315.5Q25,250,40.5,179.5Q56,109,126.5,97.5Q197,86,259.5,57Q322,28,354,89.5Q386,151,406.5,200.5Q427,250,431,317Z;  M433,298Q382,346,350.5,404Q319,462,248,468Q177,474,145.5,411.5Q114,349,79.5,299.5Q45,250,74,196.5Q103,143,141,87.5Q179,32,243,53.5Q307,75,364,100.5Q421,126,452.5,188Q484,250,433,298Z;  M430.5,319Q439,388,371,401.5Q303,415,249.5,415Q196,415,131.5,399Q67,383,70,316.5Q73,250,63,178.5Q53,107,121,85.5Q189,64,254,50Q319,36,354,92.5Q389,149,405.5,199.5Q422,250,430.5,319Z;  M440,311.5Q420,373,362,394.5Q304,416,242.5,439.5Q181,463,128,420Q75,377,66,313.5Q57,250,71,190Q85,130,138.5,100.5Q192,71,248,77.5Q304,84,353.5,111.5Q403,139,431.5,194.5Q460,250,440,311.5Z;"></animate>
                </path>
                </g>
            </svg> */}

        <Monster />

        {/* <svg viewBox="0 0 540 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 0)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 0)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 0)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 360 60)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 60)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 60)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 60)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 120 60)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 120)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 360 120)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 120)" fill="black"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 120)" fill="white"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 120)" fill="black"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 120 120)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 120)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 180)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 360 180)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 180)" fill="black"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 180)" fill="black"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 180)" fill="black"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 120 180)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 180)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 360 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 120 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 240)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 360 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 240 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 120 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 300)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 360)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 360)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 360)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 360)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 420 420)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 300 420)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 180 420)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 60 420)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 480 420)" fill="#D8DC00"/>
        <rect width="60" height="60" transform="matrix(-1 0 0 1 540 360)" fill="#D8DC00"/>
        </svg> */}

        </div>
        </div>
        </>
    )
}
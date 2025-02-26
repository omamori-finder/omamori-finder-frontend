import styles from "./Map.module.css";

const Map = () => {
    return (
        <div className="flex justify-center w-full max-w-full overflow-hidden">
            <svg className="w-5/6 h-auto md:w-3/5 lg:w-1/2" viewBox="0 0 280 310" preserveAspectRatio="xMinYMin meet">
                <path d="M 200 10 L 210 10 L 210 20 L 220 20 L 220 30 L 230 30 L 240 30 L 240 40 L 250 40 L 250 30 
                L 260 30 L 260 20 L 270 20 L 270 30 L 260 30 L 260 40 L 250 40 L 250 60 L 240 60 L 240 70 L 220 70
                L 220 80 L 210 80 L 210 70 L 200 70 L 200 60 L 190 60 L 190 70 L 190 80 L 180 80 L 180 70 L 170 70
                L 170 60 L 180 60 L 180 50 L 190 50 L 190 40 L 200 40 L 200 10 Z" 
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>       
                <path d="M 180 90 L 200 90 L 200 100 L 210 100 L 210 130 L 200 130 L 200 160 L 170 160 L 170 130 
                L 180 130 L 180 110 L 170 110 L 170 100 L 180 100 L 180 90 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <path d="M 160 160 L 190 160 L 190 190 L 180 190 L 180 200 L 170 200 L 170 190 L 180 190 L 180 180 
                L 160 180 L 160 160 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <path d="M 170 140 L 170 160 L 160 160 L 160 180 L 170 180 L 170 200 L 160 200 L 160 190 L 150 190 
                L 150 200 L 140 200 L 140 190 L 130 190 L 130 180 L 120 180 L 120 170 L 130 170 L 130 150 L 140 150 
                L 140 160 L 150 160 L 150 150 L 160 150 L 160 140 L 170 140 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <path d="M 100 180 L 130 180 L 130 190 L 140 190 L 140 200 L 130 200 L 130 220 L 110 220 L 110 200 
                L 100 200 L 100 180 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <path d="M 80 180 L 100 180 L 100 200 L 80 200 L 80 210 L 50 210 L 50 200 L 60 200 L 60 190 L 80 190 
                L 80 180 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <path d="M 80 210 L 100 210 L 100 230 L 70 230 L 70 220 L 80 220 L 80 210 Z"
                fill="white" stroke="#4A453D" strokeWidth="2" className="hover:fill-gray-400"/>
                <g className={styles.kyushuHoverGroup}>
                    <path d="M 30 200 L 40 200 L 40 210 L 50 210 L 50 220 L 40 220 L 40 230 L 50 230 L 50 240 L 60 240 
                    L 60 250 L 50 250 L 50 280 L 40 280 L 40 270 L 30 270 L 30 240 L 20 240 L 20 230 L 30 230 L 30 220 
                    L 40 220 L 40 210 L 30 210 L 30 200 Z"
                    fill="white" stroke="#4A453D" strokeWidth="2"/>
                    <path d="M 10 290 L 20 290 L 20 280 L 30 280 L 30 290 L 20 290 L 20 300 
                    L 10 300 L 10 290 Z"
                    fill="white" stroke="#4A453D" strokeWidth="2"/>
                </g>
            </svg>
        </div>
    )
}

export default Map;
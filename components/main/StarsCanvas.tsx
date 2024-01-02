"use client";

import React, {  Suspense } from "react";
import { Canvas,  } from "@react-three/fiber";
import StarBackground from "./StarBackground"
import dynamic from 'next/dynamic'



const StarsCanvas = () => (<>
<div className="w-full h-auto fixed inset-0 z-[20] " suppressHydrationWarning={true}>
        <Canvas camera={{position: [0, 0, 1]}}> 
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
    </>
    
)

export default StarsCanvas;
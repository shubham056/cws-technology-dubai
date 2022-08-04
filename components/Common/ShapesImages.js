import React from 'react';
import Image from "next/image";

const ShapesImages = () => {
    return (
        <>
            
            <div className="support-shape-1">
                <Image height={202} width={220} src="/images/support/shape-1.png" alt="shape-1.png" />
            </div>
            <div className="support-shape-2">
                <Image height={52} width={220} src="/images/support/shape-2.png" alt="shape-2.png" />
            </div>
            <div className="support-shape-3">
                <Image height={8} width={16} src="/images/support/shape-3.png" alt="shape-3.png" />
            </div>
            <div className="support-shape-4">
                <Image height={12} width={20} src="/images/support/shape-4.png" alt="shape-4.png" />
            </div>
            <div className="support-shape-5">
                <Image height={30} width={60} src="/images/support/shape-5.png" alt="shape-5.png" />
            </div>
            <div className="support-shape-6">
                <Image height={42} width={80} src="/images/support/shape-6.png" alt="shape-6.png" />
            </div>
    </>
  )
}

export default ShapesImages
import React from "react";

export const SvgXml: React.FC<{ xml: string, width?: number, height?: number }> = ({
    xml,
    width,
    height
}) => {
    return <span dangerouslySetInnerHTML={{
        __html: xml
    }}></span>
}
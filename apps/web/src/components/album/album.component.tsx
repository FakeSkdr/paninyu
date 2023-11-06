import { BackgroundImage } from "./background-image";
import { Dropzone } from "./dropzone.component";
import { css } from "@/styled-system/css";

const style = css({
  // TODO remove hardcoded 100px (header + footer height)
  height: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Exemple with black borders placeholder hardplaced in the background image, size/ratio of sitckers should be fixed in % (with variation of landscape or portrait)
const styleDropZone = css({
  position: "absolute",
  top: "23%",
  left: "13.8%",
  width: "11%",
  height: "29.6%",
});

export function Album() {
  return (
    <div className={style}>
      <BackgroundImage src="/assets/background_1.png">
        <div className={styleDropZone}>
          <Dropzone />
        </div>
      </BackgroundImage>
    </div>
  );
}

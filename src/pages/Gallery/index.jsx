import React, { useEffect, useMemo, useState } from "react"
import BodyCopy from "../../components/BodyCopy"
import Image from 'gatsby-image';
import Grid from "../../components/Grid";
import Page from "../../components/Page";
import LightBox from "../../components/LightBox";
import usePortal from 'react-useportal'
import { useAllSanityGalleryImage } from "../../hooks/useAllSanityGalleryImage"
import { CloseImageLabel, GalleryRow, SelectedImageContainer } from "./StyledComponents";
import { useCursorText } from "../../hooks/useCursorText";
import { isEmpty } from 'lodash';

const generateDefaultValue = (numberOfRows) => {
  return Array(numberOfRows).fill([])
}

const generateGalleryRows = (numberOfRows, images) => {
  const rows = generateDefaultValue(numberOfRows);
  images.forEach((image, i) => {
    const rowAssignment = i % numberOfRows;
    rows[rowAssignment] = [...rows[rowAssignment], image]
  });

  return rows;
}

const GalleryPage = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const { Portal } = usePortal()
  const { applyHoverText } = useCursorText();

  const galleryImages = useAllSanityGalleryImage();

  const selectedImageOrientation = useMemo(() => {
    if (!selectedImage) return null;
    return selectedImage.asset.fluid.aspectRatio < 1 ? "portrait" : "landscape"
  }, [selectedImage]);

  const numberOfRows = useMemo(() => 3, []);
  const galleryRows = useMemo(() => {
    return generateGalleryRows(numberOfRows, galleryImages);
  }, [galleryImages, numberOfRows])

  const imageHoverEffect = useMemo(() => applyHoverText("+ Expand"))

  return (
    <Page>
      <h2>Gallery</h2>

      { selectedImage && 
        <Portal>
          <LightBox onExit={() => setSelectedImage(null)} id="gallery-lightbox">
            <SelectedImageContainer orientation={selectedImageOrientation}>
              <CloseImageLabel>Click anywhere to exit</CloseImageLabel>
              <Image fluid={selectedImage.asset.fluid}/>
            </SelectedImageContainer>
          </LightBox>
        </Portal>
      }

      <BodyCopy>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque et omnis ut vel ipsam, maxime distinctio ipsa atque nobis quos, id at voluptas. Ut optio tempore hic facilis id, repudiandae neque cupiditate. Consequuntur error perferendis culpa nostrum libero sint numquam placeat, minima, pariatur voluptatum, accusantium rem ducimus vel? Ex quas amet quaerat, tenetur architecto voluptate necessitatibus quidem non sequi, velit, modi ducimus repellat voluptatibus dicta ut facilis cumque repellendus nam officia repudiandae obcaecati. Reprehenderit expedita, architecto, sint, nemo rem similique sit aliquam rerum sapiente corrupti alias est placeat laborum modi nam voluptate quidem? Neque aperiam incidunt ex aspernatur quas!
      </BodyCopy>

      <Grid>
        { galleryRows.map((row, i) => (
          <GalleryRow key={i}>
            { row.map(({image}, j) => (
              <div 
                onClick={() => setSelectedImage(image)} 
                key={`${i}-${j}`}
                {...imageHoverEffect}
              >
                <Image fluid={image.asset.fluid}/>
              </div>
            ))}
          </GalleryRow>
        ))}
      </Grid>

    </Page>
  )
}

export default GalleryPage

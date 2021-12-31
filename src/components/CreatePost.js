import { IconButton, Avatar } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import ImageUploading from "react-images-uploading";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./CreatePost.css";
function CreatePost({ showPost }) {
  const [images, setImages] = useState([]);
  const[addTo,setAddTo]=useState(false);
  const [addImage, setaddImage] = useState([false]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="create">
      <div className="createContainer">
        <div className="createHead">
          <h3>Create Post</h3>
          <IconButton onClick={() => showPost(false)}>
            <CloseOutlined fontSize="large" />
          </IconButton>
        </div>
        <div className="createForm">
          <div className="forms formsHead">
            <Avatar />
            <span>Logeshwar</span>
          </div>
          <div className="formsMiddle ">
            <div className="forms formsTitle">
              {" "}
              <input type="text" placeholder="Enter the Title" />
            </div>
            <div className="forms formsTitle">
              <input type="text" placeholder="Enter the Category" />
            </div>
          </div>
          <div className="forms">
            <textarea
              style={!addTo ? { height: "120px" } : { height: "50px" }}
              placeholder="Type Content here!"
            ></textarea>
          </div>
          {addTo && (
            <div className="forms">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <div
                      className="imgUpload"
                      style={
                        (isDragging ? { color: "red" } : null,
                        { backgroundImage: `url(${imageList.length>0&&imageList[0].data_url})` })
                      }
                      onClick={!images.length > 0 && onImageUpload}
                      {...dragProps}
                    >
                      <button
                        className="removeButton"
                        onClick={() => {
                          setAddTo(false);
                          setImages([]);
                        }}
                      >
                        <CloseOutlined fontSize="small" />{" "}
                      </button>
                      <div className="dargDropLabel">
                        {!images.length > 0 ? (
                          <>
                            <AddPhotoAlternateIcon />
                            <h5>Add Photos</h5>
                            <small>or drag and drop</small>
                          </>
                        ) : (
                          imageList.map((image, index) => (
                            <div
                              style={{
                                backgroundImage: `url(${image.data_url})`,
                              }}
                              key={index}
                              className="image-item"
                            >
                              {/*
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                Update
                              </button>
                              <button onClick={() => {onImageRemove(index);onImageRemoveAll()}}>
                                Remove
                        </button>
                            </div>*/}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>
          )}
          <div className="forms formsPost">
            <div className="addTO">
              <label class="addTolabel">Add to your Post</label>
              <div>
                <button className="addImg" onClick={() => setAddTo(true)}>
                  <img src="images/photo.png" alt="" />
                </button>
              </div>
            </div>
            <button className="postCreate">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

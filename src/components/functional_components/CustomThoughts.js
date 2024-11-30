import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ItemHolder from '../styling_components/ItemHolder';

import {
  Button,
  CloseButton,
  PaginationButton,
} from "../styling_components/AllButtons";
import InfoContainer from "../styling_components/InfoContainer";
import {
  StyledList,
  StyledListSavedItems,
} from "../styling_components/AllStyledLists";

const randomImages = [
  "/images/imagesforthoughts/image1.jpg",
  "/images/imagesforthoughts/image2.jpg",
  "/images/imagesforthoughts/image3.jpg",
  "/images/imagesforthoughts/image4.jpg",
  "/images/imagesforthoughts/image5.jpg",
  "/images/imagesforthoughts/image6.jpg",
  "/images/imagesforthoughts/image7.jpg",
  "/images/imagesforthoughts/image8.jpg",
];

function CustomThoughts({ savedCustomThoughts, setSavedCustomThoughts }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.newThought.trim()) {
      alert("Please write a thought before saving.");
      return;
    }

    if (
      !savedCustomThoughts.find((thought) => thought.text === data.newThought)
    ) {
      const randomImage =
        randomImages[Math.floor(Math.random() * randomImages.length)];
      setSavedCustomThoughts([
        ...savedCustomThoughts,
        { text: data.newThought, image: randomImage },
      ]);
      reset();
    }
  };

  const removeThought = (indexToRemove) => {
    setSavedCustomThoughts(
      savedCustomThoughts.filter((_savedCustomThought, index) => index !== indexToRemove)
    );
  };

  return (
    <InfoContainer>
      <h1>Step 4/4</h1>
      <p>
        Write down your own thoughts
        <br /> on how to make <br />
        the advent time more magical
      </p>
      <InfoContainer>
      <ItemHolder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Write your own ideas to make Advent time magic"
            {...register("newThought", {
              required: "Please enter a thought before saving.",
            })}
            style={{
              padding: "10px",

              borderRadius: "5px",
              border: "0px solid #ccc",
              boxSizing: "border-box",
              minHeight: "350px",
              minWidth: "400px",
              resize: "vertical",
              display: "flex",
              margin: "10px auto",
              marginTop: "2em",
              rows: "16",
              
            }}
          />
          {errors.newThought && (
            <p style={{ color: "red" }}>{errors.newThought.message}</p>
          )}

          <Button
            type="submit"
            style={{
              margin: "10px auto",
               display: "flex",
              justifyContent: "center",
            }}
          >
            Save
          </Button>
        </form>
 </ItemHolder>
        <div style={{ marginTop: "10px" }}>
          <Link to="/ideaspage">
            <PaginationButton style={{ margin: "0 10px" }}>
              Back
            </PaginationButton>
          </Link>
          <Link to="/saved-items">
            <PaginationButton style={{ margin: "0 10px" }}>
              Finish
            </PaginationButton>
          </Link>
        </div>
      </InfoContainer>

      {savedCustomThoughts.length > 0 && (
        <InfoContainer style={{ marginTop: '30px' , backgroundColor: '#e0e0e994' , borderRadius: '2.5em'}}>
          <h3>Saved Thoughts:</h3>
          <StyledListSavedItems>
            {savedCustomThoughts.map((thought, index) => (
              <StyledList key={index}>
                <p>{thought.text}</p>
                {thought.image && (
                  <img
                    src={thought.image}
                    alt={thought.text}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "10px",
                      borderRadius: "15px",
                    }}
                  />
                )}
                <CloseButton
                  onClick={() => removeThought(index)}
                  style={{ marginLeft: "10px" }}
                >
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledListSavedItems>
        </InfoContainer>
      )}
    </InfoContainer>
  );
}

export default CustomThoughts;

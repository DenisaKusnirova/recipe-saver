import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DoneIcon from "@material-ui/icons/Done";
import Typography from "@material-ui/core/Typography";
import RecipeFormTextField from "../../components/RecipeFormTextField";
import RecipeFormSelect from "../../components/RecipeFormSelect";
import { texts } from "../../assets/texts";
import RECIPE_CATEGORIES from "../../assets/recipeCategories";
import IconChefHat from "../../assets/icons/icon-chef.png";
import IconList from "../../assets/icons/icon-list.png";
import { addNewRecipe } from "../../actions/recipeActions";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 860,
    margin: "0 auto",
    padding: 16,
    "& .MuiTextField-root": {
      marginBottom: 16,
      width: "100%",
    },
    "& h5": {
      marginBottom: 20,
    },
    "& h6": {
      marginBottom: 16,
      display: "flex",
      alignItems: "end",
      "& img": {
        marginRight: 8,
      },
    },
  },
  buttonLink: {
    textDecoration: "none",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 8,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    "& > *": {
      flexGrow: 1,
      maxWidth: 260,
    },
  },
}));

function NewRecipe({ handleSubmit, history }) {
  const copy = texts.newRecipeForm;
  const classes = useStyles();
  const dispatch = useDispatch();

  const formValues = useSelector((state) => state.form.newRecipeForm);

  const renderRecipeBasicsFields = (
    <div>
      <Typography variant="subtitle1" color="primary">
        <img src={IconChefHat} alt="icon-chef-hat" />
        Recipe basics
      </Typography>
      <Field
        key="title"
        type="text"
        name="title"
        component={RecipeFormTextField}
        label={copy.title}
      />
      <div className={classes.flexRow}>
        <Field
          key="servings"
          type="number"
          name="servings"
          component={RecipeFormTextField}
          label={copy.numberOfServings}
        />
        <Field
          key="cookingTime"
          type="time"
          name="cookingTime"
          component={RecipeFormTextField}
          label={copy.cookingTime}
        />
        <Field
          key="category"
          name="category"
          component={RecipeFormSelect}
          label={copy.category}
          choices={RECIPE_CATEGORIES}
        />
      </div>
    </div>
  );

  const renderRecipeDetailsFields = (
    <div>
      <Typography variant="subtitle1" color="primary">
        <img src={IconList} alt="icon-list" />
        Recipe details
      </Typography>
      <Field
        key="ingredients"
        type="text"
        name="ingredients"
        component={RecipeFormTextField}
        rows={4}
        label={copy.ingredients}
      />
      <Field
        key="directions"
        type="text"
        name="directions"
        component={RecipeFormTextField}
        rows={4}
        label={copy.directions}
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(() =>
        dispatch(addNewRecipe(formValues.values, history))
      )}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">{copy.saveNewRecipe}</Typography>
          {renderRecipeBasicsFields}
          {renderRecipeDetailsFields}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<DoneIcon />}
            size="small"
          >
            SAVE
          </Button>
          <Link to="/home" className={classes.buttonLink}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
            >
              Cancel
            </Button>
          </Link>
        </CardActions>
      </Card>
    </form>
  );
}

export default reduxForm({
  form: "newRecipeForm",
  destroyOnUnmount: true,
})(NewRecipe);

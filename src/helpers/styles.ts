import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "8px 12px",
      border: "2px solid #3C73C7",
      color: "#fff",
      backgroundColor: "#0A1222",
      borderRadius: "8px",
      fontSize: 14,
      fontWeight: 300,
      width: "100%",
      "&$focused": {
        backgroundColor: "#b42737",
      },
    },
    label: {
      color: "#BABABA",
      fontWeight: 300,
      marginBottom: 4,
      fontSize: 12,
    },
    error: {
      border: "2px solid #fd1717",
    },
    btn: {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#F85365",
      color: "#fff",
      borderRadius: "8px",
      textTransform: "capitalize",
      fontWeight: 400,
      "&:hover": {
        backgroundColor: "#b42737",
      },
      "&:disabled": {
        backgroundColor: "#CBCBCB",
        color: "#8F8F8F",
      },
    },
    btn_select: {
      width: 200,
    },
  })
);

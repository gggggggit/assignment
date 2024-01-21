import { style } from "@vanilla-extract/css";

export const contentCard = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  padding: 8,
  border: "1px solid",
  borderRadius: 4,
  marginBottom: 8,
});
export const thumbnail = style({
  width: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const info = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "48px 1fr",
});
export const description = style({});

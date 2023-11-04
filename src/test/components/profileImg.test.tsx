import { describe, expect, test } from "vitest";
import ProfileImg from "../../components/profileImg";
import { render, screen } from "@testing-library/react";

describe("Render profileImg with its props", async () => {
  const id = 1;

  render(
    <ProfileImg 
      id={id}
      size={96}
      url="https://avatars.githubusercontent.com/u/1?v=4"
    />
  );

  test("Should show the image", () => {
    const imgElement = screen.getByAltText(`profile-${id}`);
    expect(imgElement).toBeDefined();
  });
});
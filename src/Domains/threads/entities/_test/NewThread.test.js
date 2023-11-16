const NewThread = require("../NewThread");

describe("a newThread entities", () => {
  it("should throw error when not contain needed property", () => {
    // Arrange
    const payload = {
      title: "title",
    };

    // Action and Assert
    expect(() => new NewThread(payload)).toThrowError(
      "NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when not meet data type specification", () => {
    // Arrange
    const payload = {
      title: "title",
      body: 123,
      owner: "123",
    };

    // Action and Assert
    expect(() => new NewThread(payload)).toThrowError(
      "NEW_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should create NewThread entities correctly", async () => {
    // Arrange
    const payload = {
      title: "title",
      body: "body",
      owner: "user-123",
    };

    // Action
    const newThread = new NewThread(payload);

    // Assert
    expect(newThread).toBeInstanceOf(NewThread);
    expect(newThread.title).toEqual(payload.title);
    expect(newThread.body).toEqual(payload.body);
    expect(newThread.owner).toEqual(payload.owner);
  });
});

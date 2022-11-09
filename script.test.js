const Script = require("./script");

describe("multiply関数", () => {
  test("3,10,3を引数として渡すと90を返す", () => {
    expect(Script.multiply(3, 10, 3)).toBe(90);
  });

  test("10,5を引数として渡すと50を返す", () => {
    expect(Script.multiply(10, 5)).toBe(50);
  });

  test("1を1個引数として渡すと1を返す", () => {
    expect(Script.multiply(1)).toBe(1);
  });

  test("1を30個引数として渡すと1を返す", () => {
    expect(
      Script.multiply(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      )
    ).toBe(1);
  });

  test("1を31個引数として渡すとエラーが発生する", () => {
    expect(() => {
      Script.multiply(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      );
    }).toThrow();
  });

  test("引数に「あ、い」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.multiply("あ", "い");
    }).toThrow();
  });

  test("引数に「+、？」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.multiply("+", "?");
    }).toThrow();
  });

  test("引数に配列を渡すとエラーが発生する", () => {
    expect(() => {
      Script.multiply([1, 2, 3]);
    }).toThrow();
  });

  test("100,100を引数として渡すと「big big number」を返す", () => {
    expect(Script.multiply(100, 100)).toBe("big big number");
  });
});

describe("add関数", () => {
  test("3,10,3を渡すと16を返す", () => {
    expect(Script.add(3, 10, 3)).toBe(16);
  });

  test("10,5を引数として渡すと15を返す", () => {
    expect(Script.add(10, 5)).toBe(15);
  });

  test("1を1個引数として渡すと1を返す", () => {
    expect(Script.add(1)).toBe(1);
  });

  test("1を30個引数として渡すと30を返す", () => {
    expect(
      Script.add(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      )
    ).toBe(30);
  });

  test("1を31個引数として渡すとエラーが発生する", () => {
    expect(() => {
      Script.add(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      );
    }).toThrow();
  });

  test("引数に「あ、い」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.add("あ", "い");
    }).toThrow();
  });

  test("引数に「+、？」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.add("+", "?");
    }).toThrow();
  });

  test("引数に配列を渡すとエラーが発生する", () => {
    expect(() => {
      Script.add([1, 2, 3]);
    }).toThrow();
  });

  test("1000, 1を引数として渡すと「too big」を返す", () => {
    expect(Script.add(1000, 1)).toBe("too big");
  });
});

describe("substract関数", () => {
  test("10,3を渡すと7を返す", () => {
    expect(Script.substract(10, 3)).toBe(7);
  });

  test("100,10,10を渡すと80を返す", () => {
    expect(Script.substract(100, 10, 10)).toBe(80);
  });

  test("1を1個引数として渡すと1を返す", () => {
    expect(Script.substract(1)).toBe(1);
  });

  test("30と1を29個引数として渡すと1を返す", () => {
    expect(
      Script.substract(
        30,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      )
    ).toBe(1);
  });

  test("1を31個引数として渡すとエラーが発生する", () => {
    expect(() => {
      Script.substract(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      );
    }).toThrow();
  });

  test("引数に「あ、い」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.substract("あ", "い");
    }).toThrow();
  });

  test("引数に「+、？」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.substract("+", "?");
    }).toThrow();
  });

  test("引数に配列を渡すとエラーが発生する", () => {
    expect(() => {
      Script.substract([1, 2, 3]);
    }).toThrow();
  });

  test("3,10,3を引数として渡すと「negative number」を返す", () => {
    expect(Script.substract(3, 10, 3)).toBe("negative number");
  });
});

describe("divide関数", () => {
  test("100,10を渡すと10を返す", () => {
    expect(Script.divide(100, 10)).toBe(10);
  });

  test("20,2,2を渡すと5を返す", () => {
    expect(Script.divide(20, 2, 2)).toBe(5);
  });

  test("1を1個引数として渡すと1を返す", () => {
    expect(Script.divide(1)).toBe(1);
  });

  test("1を30個引数として渡すと1を返す", () => {
    expect(
      Script.divide(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      )
    ).toBe(1);
  });

  test("1を31個引数として渡すとエラーが発生する", () => {
    expect(() => {
      Script.divide(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      );
    }).toThrow();
  });

  test("引数に「あ、い」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.divide("あ", "い");
    }).toThrow();
  });

  test("引数に「+、？」を渡すとエラーが発生する", () => {
    expect(() => {
      Script.divide("+", "?");
    }).toThrow();
  });

  test("引数に配列を渡すとエラーが発生する", () => {
    expect(() => {
      Script.divide([1, 2, 3]);
    }).toThrow();
  });

  test("10,3を渡すと0.33を返す", () => {
    expect(Script.divide(10, 3)).toBe(3.33);
  });
});

const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Mật khẩu sai", () => {
        expect(() => login("admin", "456"))
            .toThrow("Sai username hoặc password");
    });

    test("Username sai", () => {
        expect(() => login("user", "123"))
            .toThrow("Sai username hoặc password");
    });

    test("Username rỗng", () => {
        expect(() => login("", "123"))
            .toThrow("Username không được để trống");
    });

    test("Password rỗng", () => {
        expect(() => login("admin", ""))
            .toThrow("Password không được để trống");
    });

    test("Password chứa ký tự đặc biệt", () => {
        expect(() => login("admin", "12@3"))
            .toThrow("Password chứa ký tự đặc biệt");
    });

    test("Tài khoản bị khóa", () => {
        expect(() => login("locked", "123"))
            .toThrow("Tài khoản bị khóa");
    });

    test("Sai cả username và password", () => {
        expect(() => login("user", "456"))
            .toThrow("Sai username hoặc password");
    });
});

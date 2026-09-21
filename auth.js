function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        throw new Error("Tài khoản bị khóa");
    }

    // Username rỗng
    if (!username) {
        throw new Error("Username không được để trống");
    }

    // Password rỗng
    if (!password) {
        throw new Error("Password không được để trống");
    }

    // Password chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        throw new Error("Password chứa ký tự đặc biệt");
    }

    // Kiểm tra tài khoản và mật khẩu

        return true;
    }

    throw new Error("Sai username hoặc password");
}

module.exports = { login };

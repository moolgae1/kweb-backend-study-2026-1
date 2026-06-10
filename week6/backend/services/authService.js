const userRepository = require('../repositories/userRepository');
const { hashPassword, comparePassword } = require('../utils/password');

/**
 * Auth Service
 * 인증 관련 비즈니스 로직을 담당
 */

/**
 * 회원가입
 */
async function register(username, password) {
    // TODO: Implement
    // 1. 입력 유효성 검사
    // 2. 중복 사용자 확인 (userRepository.existsByUsername)
    // 3. 비밀번호 해싱 (hashPassword)
    // 4. 사용자 생성 (userRepository.create)
    // 5. 사용자 정보 반환 (비밀번호 제외)
   // if(username ==)


    throw new Error('Not implemented');
    const hashedPassword = await hashPassword(password);
    const result = await userRepository.create(username, hashedPassword);
    return result;
}

/**
 * 로그인
 */
async function login(username, password) {
    // TODO: Implement
    // 1. 입력 유효성 검사
    // 2. 사용자 조회 (userRepository.findByUsername)
    // 3. 비밀번호 확인 (comparePassword)
    // 4. 사용자 정보 반환 (비밀번호 제외)

    if(username === "" || password === "") {
        throw new Error('값이빔.')
    }
    const user = userRepository.findByUsername(username);
    if(!user) {
        throw new Error('아이디 비번 확인하셈.');
    }
    const isPasswordCorrect = await comparePassword(password, user.password)
    if(!isPasswordCorrect) throw new Error('아이디/비번확인');

    return {id: user.id, username: user.username, createdAt: user.createdAt};

    throw new Error('Not implemented');
}

/**
 * 현재 사용자 조회
 */
async function getCurrentUser(userId) {
    // TODO: Implement
    // 1. 사용자 조회 (userRepository.findById)
    // 2. 사용자 정보 반환 (비밀번호 제외)
    const user = await userRepository.findById(userId);
    if(!user) throw new Error('없음 그런유저.');
    return {id: user.id, user: user.username, createdAt: user.createdAt};
}

module.exports = {
    register,
    login,
    getCurrentUser
};

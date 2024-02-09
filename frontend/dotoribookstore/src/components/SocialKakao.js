const SocialKakao = ()=>
{

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=3c74a5584f931b80b80464d2cd6c09bd&redirect_uri=http://192.168.0.4:8080/oauth/kakao&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}
export default SocialKakao
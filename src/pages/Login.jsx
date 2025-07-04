import LoginForm from "../components/Auth/LoginForm";
function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoginForm />
            {/* <div className="text-center mt-4">
                <p className="text-gray-600">Немає облікового запису? <a href="/register" className="text-blue-500 hover:underline">Зареєструватися</a></p>
            </div>
            <div className="text-center mt-2">
                <p className="text-gray-600">Або повернутися до <a href="/" className="text-blue-500 hover:underline">головної сторінки</a></p>
            </div> */}
      </div>
  );
}
export default Login;
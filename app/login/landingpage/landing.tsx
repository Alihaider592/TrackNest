
import { useNavigate } from 'react-router-dom';

export default function JoinSection() {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <h3 className="text-xl font-bold mb-2">Want to bring your team?</h3>
      <p className="text-gray-600 mb-6">Register your company to start managing your projects.</p>
      <button 
        onClick={() => navigate('/contact-admin')}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg"
      >
        Request to Join
      </button>
    </div>
  );
}
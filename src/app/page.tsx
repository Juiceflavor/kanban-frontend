import './assets/styles/globals.css';

function MyApp() {
  return (
    <div className=" ">
      <main>
        <section id="hero" className="text-center py-16 bg-blue-500 text-white">
          <h2 className="text-4xl font-bold mb-4">Streamline Your Workflow with Kanban API</h2>
          <p className="mb-6">A robust API designed to create and manage Kanban boards, tasks, and subtasks.</p>
          <a href="#features" className="bg-white text-blue-500 py-2 px-4 rounded shadow hover:bg-gray-200">Explore Features</a>
        </section>
        <section id="features" className="py-16 ">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded shadow">
                <h4 className="text-xl font-bold mb-2">Create Boards</h4>
                <p>Easily create and manage Kanban boards for different projects.</p>
              </div>
              <div className="p-6 rounded shadow">
                <h4 className="text-xl font-bold mb-2">Organize Tasks</h4>
                <p>Assign tasks and move them across statuses like Active or Inactive.</p>
              </div>
              <div className="p-6 rounded shadow">
                <h4 className="text-xl font-bold mb-2">Subtasks Support</h4>
                <p>Break down tasks into manageable subtasks for better tracking.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-16 ">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">How It Works</h3>
            <p className="mb-4">Our API provides endpoints to create, update, and manage boards, tasks, and subtasks efficiently. Perfect for developers building project management tools.</p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kanban API. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;

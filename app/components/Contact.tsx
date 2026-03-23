export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-20">
      <h2 className="text-3xl font-display font-bold mb-6">Contact</h2>
      <input className="w-full bg-bg3 p-3 border border-white/10 mb-3" placeholder="Name" />
      <input className="w-full bg-bg3 p-3 border border-white/10 mb-3" placeholder="Email" />
      <textarea className="w-full bg-bg3 p-3 border border-white/10" placeholder="Message" />
    </section>
  );
}
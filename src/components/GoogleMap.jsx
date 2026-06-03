export default function GoogleMap() {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[99%] h-[590px] rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.940646515982!2d79.8627527!3d6.9203773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25957d7000b55%3A0x22a490f7f4490934!2sCeylon%20Tea%20Brokers%20PLC!5e0!3m2!1sen!2slk!4v1737020000000"
          width="100%"
          height="100%"
          style={{ border: 1 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ceylon Tea Brokers PLC Location"
        ></iframe>
      </div>
    </div>
  );
}

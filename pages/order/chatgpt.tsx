import axios from "axios";
import OrderLayout from "ComponentsFarm/layouts/pageLayouts/OrderLayout";
import React, { FormEvent, useState } from "react";

interface Message {
  type: string;
  text: string;
}

function Chatgpt() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inputValue) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputValue }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );
      const answer = response.data.choices[0].message.content;
      setMessages((prevMessages) => [...prevMessages, { type: "question", text: inputValue }, { type: "answer", text: answer }]);
      setInputValue("");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <OrderLayout>
      <h2 className="tit tit2">GPT 테스트</h2>
      <div style={{ marginTop: "5rem", fontSize: "2rem" }}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === "question" ? (
              <div>Question: {message.text}</div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
                <span>
                  <img
                    src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/bg_person.webp"
                    alt=""
                    style={{ width: "auto", height: "20rem" }}
                  />{" "}
                </span>{" "}
                <span> : </span>
                {message.text}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} style={{ position: "absolute", bottom: 0, paddingBottom: "5rem" }}>
          <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <button type="submit" disabled={isSubmitting} style={{ width: "5.6rem", height: "5.6rem", background: "#000", color: "#fff" }}>
            Ask
          </button>
        </form>
      </div>
    </OrderLayout>
  );
}

export default Chatgpt;

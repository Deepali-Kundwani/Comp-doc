import React from "react";
import "./Grid.css";
import Iframe from "react-iframe";

export const Grid = () => {
  return (
    <div>
      <h1 className="grid-heading">Grid</h1>
      <div className="grid-container">
        <div className="grid-item">
          Motivational quotes can help you reach your potential each day. Sure,
          they’re just words. But they’re positive words. And if you’re on the
          verge of giving up or struggling to push yourself to the next level,
          sometimes that’s just what you need. So whether you’re trying to
          finish a project, start a new side hustle, or hit that big life goal,
          knowing how to motivate yourself and train your brain for success can
          help.{" "}
        </div>
        <div className="grid-item one">
          Motivational quotes can help you reach your potential each day. Sure,
          they’re just words. But they’re positive words. And if you’re on the
          verge of giving up or struggling to push yourself to the next level,
          sometimes that’s just what you need. So whether you’re trying to
          finish a project, start a new side hustle, or hit that big life goal,
          knowing how to motivate yourself and train your brain for success can
          help.{" "}
        </div>
        <div className="grid-item two">
          Motivational quotes can help you reach your potential each day. Sure,
          they’re just words. But they’re positive words. And if you’re on the
          verge of giving up or struggling to push yourself to the next level,
          sometimes that’s just what you need. So whether you’re trying to
          finish a project, start a new side hustle, or hit that big life goal,
          knowing how to motivate yourself and train your brain for success can
          help.{" "}
        </div>
        <div className="grid-item three">
          Motivational quotes can help you reach your potential each day. Sure,
          they’re just words. But they’re positive words. And if you’re on the
          verge of giving up or struggling to push yourself to the next level,
          sometimes that’s just what you need. So whether you’re trying to
          finish a project, start a new side hustle, or hit that big life goal,
          knowing how to motivate yourself and train your brain for success can
          help.{" "}
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522grid-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520CONTENT%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520one%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520CONTENT%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520two%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520CONTENT%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520three%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520CONTENT%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="736px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};

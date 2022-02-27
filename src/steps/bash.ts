import dedent from "ts-dedent";
import { StepsProps } from "cdkactions";

const step: StepsProps = {
  name: "Convert /bin/sh to /bin/bash with force",
  run: dedent`
    sudo mv /bin/sh /bin/sh-dash
    sudo ln -s /bin/bash /bin/sh
    npm uninstall -g phantomjs
    rm /usr/local/bin/phantomjs
  `,
};

export default step;

// Possible for now
// From
// new Component(new Component2())
// To
// <Component>
//  <Component2/>
// </Component>

// Goal
// <Text props="label1" />

// options default none-complex
// 1.
// <close></close> isComplex, complex function
// <in-close/>

// 2. wrap value default none-wrap
// <A v={"a"}/> isWrapProps, wrapProps function
// <A v="a"/>

function convertJsxType(value, isWrap) {
  switch (typeof value) {
    case "string":
      return isWrap ? `{"${value}"}` : `"${value}"`;
    case "number":
      return `{${value}}`;
    case "object":
      return `{${JSON.stringify(value)}}`;
    default:
      return value;
  }
}

class Component {
  private componentName: string = "";
  private componentProps: object = {};
  private isComplex: boolean = false;
  private isWrapProps: boolean = false;
  private innerContent: Component | string = null;
  code: string;

  constructor(compoName: string) {
    this.componentName = compoName;
  }

  public props(propsObject: object) {
    this.componentProps = propsObject;
    return this;
  }

  public content(content: Component | string) {
    this.innerContent = content;
    return this;
  }

  public complex() {
    this.isComplex = true;
    return this;
  }

  public wrapProps() {
    this.isWrapProps = true;
    return this;
  }

  public exportAs() {
    // <Text
    this.code = `<${this.componentName}`;

    if (this.componentProps != null) {
      let props: string = "";

      Object.keys(this.componentProps).map((i) => {
        // props={"label1"}
        props += ` ${i}=`;
        props += convertJsxType(this.componentProps[i], this.isWrapProps);
      });

      // <Text props={"label1"}
      this.code += props;
    }

    if (this.innerContent != null) {
      if (this.innerContent instanceof Component) {
        this.code += `> ${this.innerContent.exportAs()} </${
          this.componentName
        }>`;
      } else {
        this.code += `> ${this.innerContent} </${this.componentName}>`;
      }
    } else if (this.isComplex) {
      this.code += `> </${this.componentName}>`;
    } else {
      this.code += ` />`;
    }

    return this.code;
  }
}

const a = new Component("Text")
  .props({ props: "label1" })
  .complex()
  .wrapProps()
  .exportAs();
console.log(a);
const a1 = new Component("Text").props({ props: "label1" });

const b = new Component("TextWrapper")
  .props({ innerText: "hello" })
  .content(a1)
  .exportAs();

console.log(b);

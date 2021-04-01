import React from 'react'
import { useRecoilState } from 'recoil'
import CodeBlock from '../../../components/code-block'
import { functionDeclarationAtom } from '../../../states/declaration.state'
import EditorTemplate from '../../../template/editor-template'

const functionExample = "function sum(a : number, b : number ) { return a + b }"

function FunctionDemoPage() {
  const [atom, setAtom] = useRecoilState(functionDeclarationAtom)

  console.log(atom)
  
  return (
    <EditorTemplate example={functionExample} editorNode={[1,2,3]}>
      <CodeBlock />
      <CodeBlock />
      <CodeBlock />
      <CodeBlock />
      <CodeBlock />
    </EditorTemplate>
  )
}

export default FunctionDemoPage

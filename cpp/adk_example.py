from google_adk.agents import LlmAgent
from google_adk.tools import FunctionTool

# 1. Define a tool
def add(a: int, b: int) -> int:
  """Adds two numbers."""
  return a + b

add_tool = FunctionTool(add)

# 2. Create the LLMAgent
agent = LlmAgent(
    name="CalculatorAgent",
    model="gemini-pro",
    tools=[add_tool],
    description="An agent that can perform calculations."
)

# 3. Run the agent
result = agent.run("What is 5 + 5?")

print(result)

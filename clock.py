import turtle
Screen = turtle.Screen()
t = turtle.Turtle()
Screen.setup(620, 620)
Screen.bgcolor('black')
t.pensize(4)
t.shape('turtle')
t.penup()
t.pencolor('cyan')
m = 0
for i in range(12):
	m = m+1
	t.penup()
	t.setheading(-30 * i + 60)
	t.forward(150)
	t.pendown()
	t.forward(50)
	t.penup()
	t.forward(20)
	t.write(str(m), align="center",
		font=("Arial", 12, "normal"))
	if m == 12:
		m = 0
	t.home()
t.home()
t.setpos(0, -250)
t.pendown()
t.pensize(2)
t.pencolor('cyan')
t.circle(250)
t.setpos(150, -270)
t.pendown()
t.ht
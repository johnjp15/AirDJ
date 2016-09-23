//returns scalar dot product of two vectors v1 and v2
function getDotProduct(v1, v2)	{
	return v1.i * v2.i + v1.j * v2.j + v1.k * v2.k;
}

//returns cross product vector normal to v1 and v2
function getCrossProduct(v1, v2) {
	i = (v1.j * v2.k - v2.j * v1.k);
	j = (v2.i * v1.k - v1.i * v2.k);
	k = (v1.i * v2.j - v2.i * v1.j);

	n = {"i":i, "j":j, "k":k};

	return n;
}

//returns the magnitude of a vector v
function getVectorMagnitude(v)	{
	return Math.sqrt(getDotProduct(v, v));
}

//subtracts the two points to get a vector pointing towards point2 from point1
function getVectorFromPoints(point1, point2)  {
	delta_x = point2[0] - point1[0];
	delta_y = point2[1] - point1[1];
	delta_z = point2[2] - point1[2];

	vector = {"i":delta_x, "j":delta_y, "k":delta_z};

	return vector;
}

//point1, point2, point3 are arrays, each one contains xyz coordinates (e.g. point1[0] returns x coordinate)
//returns plane in associate array form
//plane is analogous to a(x - x0) + b(y - y0) + c(z - z0) = 0
function getEquationOfPlaneFromPoints(point1, point2, point3) {
	//taking point1 as center/origin (0, 0, 0)
	v1 = getVectorFromPoints(point1, point2);
	v2 = getVectorFromPoints(point1, point3);

	n = getCrossProduct(v1, v2);

	plane = {"normal":n, "point":point1};

	return plane;
}

//point is an array, indices correspond to x, y, z respectively (e.g. 0 is x)
//plane is associative array containing normal vector and the center point
function getDistanceFromPointToPlane(point, plane)	{
	v = getVectorFromPoints(plane.point, point);
	n = plane.normal;

	distance = (Math.abs(getDotProduct(n, v)) / getVectorMagnitude(n));

	return distance;
}

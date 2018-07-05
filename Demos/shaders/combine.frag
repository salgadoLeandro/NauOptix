#version 430

uniform sampler2D raster;
uniform sampler2D raytrace;

in vec2 TexCoord;

out vec4 outColor;

void main() {
    vec4 cr = texture(raster, TexCoord);
    vec4 rr = texture(raytrace, TexCoord);

    outColor = cr.w == 1 ? cr : rr;
}
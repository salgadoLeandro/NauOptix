#version 430

uniform mat4 m_pvm, m_view, m_model;
uniform mat3 m_normal;
uniform vec4 l_dir;

in vec4 position;
in vec4 normal;
in vec4 texCoord0;

out Data {
    vec4 pos;
    vec2 texCoord;
    vec3 normal;
    vec3 l_dir;
} DataOut;

void main() {
    DataOut.pos = m_model * position;
    DataOut.normal = normalize(m_normal * vec3(normal));
    DataOut.l_dir = vec3(0.0);
    DataOut.texCoord = vec2(texCoord0);
    gl_Position = m_pvm * position;
}